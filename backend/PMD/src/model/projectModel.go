package model

import (
	"errors"

	"github.com/beego/beego/orm"
)


type Project struct{
    Project_id int `orm:"column(project_id);auto;pk" json:"project_id"`
    Name string `orm:"column(name)" json:"name"`
    Assignee_id string `orm:"column(assignee_id)" json:"assignee_id"`
    Status string `orm:"column(status)" json:"status"`
    Users []*User `orm:"reverse(many);"`
}
func init(){
    orm.RegisterModel(new(Project))
}
func (p *Project)TableName() string{
    return "project"
}

func AddProject(p *Project) (id int64,err error){
    o := orm.NewOrm()
    id,err = o.Insert(p)
    return
}
func GetAllProjects(args ...string)(p []Project,err error){
    if len(args) > 1{
        return p,errors.New("Paramaters Wrong")
    }
    var status string
    if len(args) == 0{
        status = "Active"
    }else{
        status = args[0]
    }
    o := orm.NewOrm()
    _,err = o.QueryTable(new(Project)).RelatedSel().Filter("Status",status).Limit(-1).All(&p)
    if err != nil{
        return nil,err
    }
    return p,nil
}
func GetProjecsOfUserID(user_id int)(p []User,err error){
    o := orm.NewOrm()
    var u []User
    _,err = o.QueryTable(new(User)).Filter("user_id",user_id).All(&u)
    // _,err = o.QueryTable((new(Project))).RelatedSel().Filter("user__user_id",user_id).All(&p)
    if err != nil{
        return p,err
    }
    return u,nil 
}
func GetUsersByProjectID(pid int)(u []User,err error){
    o := orm.NewOrm()
    _,err = o.QueryTable(new(User)).RelatedSel().Filter("Projects__Project__Project_id",pid).All(&u)
    return
}
func GetSpecificProject(id int)(p Project,err error){
    o := orm.NewOrm()
    err = o.QueryTable(new(Project)).Filter("project_id",id).One(&p)
    return
}

func RemoveProject(id int)error{
    o := orm.NewOrm()
    _,err := o.QueryTable(new(Project)).Filter("project_id",id).Update(orm.Params{"status":"Inactive"})
    if err != nil{
        return err
    }
    return nil
}
