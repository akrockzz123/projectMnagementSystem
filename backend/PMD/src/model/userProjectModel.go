package model

import (
	"fmt"

	"github.com/beego/beego/orm"
)

type UserProject struct {
	User_id    int `json:"user_id"`
	Project_id int `json:"project_id"`
}

func AssignProjectByID(up UserProject) (id int64, err error) {
	o := orm.NewOrm()
	u := User{User_id: up.User_id}
	m2m := o.QueryM2M(&u, "Projects")
	var p Project
	_, err = o.QueryTable(new(Project)).Filter("project_id", up.Project_id).All(&p)
	id, err = m2m.Add(p)
	if err != nil {
		return id, err
	}

	fmt.Println(up.Project_id)
	_, err1 := o.QueryTable(new(Project)).Filter("project_id", up.Project_id).Update(orm.Params{"status": "Active"})

	fmt.Println(err1)

	return id, err
}
func GetProjectsByUserID(uid int) (p []Project, err error) {
	o := orm.NewOrm()
	_, err = o.QueryTable(new(Project)).RelatedSel().Filter("Users__User__user_id", uid).All(&p)
	return
}
func IsUserAssignedToProject(u UserProject) bool {
	o := orm.NewOrm()
	return o.QueryTable(new(User)).RelatedSel().Filter("user_id", u.User_id).Filter("Projects__Project__Project_id", u.Project_id).Exist()
}
