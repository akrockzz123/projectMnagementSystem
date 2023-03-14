package model

import (
	"errors"
	"fmt"

	"github.com/beego/beego/orm"
)

type User struct {
	User_id  int        `orm:"column(user_id);auto;pk" json:"user_id"`
	Username string     `orm:"column(username)" json:"userName"`
	Email    string     `orm:"column(email)" json:"email"`
	Role     string     `orm:"column(role)" json:"role"`
	Status   string     `orm:"column(status)" json:"status"`
	Projects []*Project `orm:"rel(m2m)"`
}

func init() {
	orm.RegisterModel(new(User))
}

func (u *User) TableName() string {
	return "user"
}
func AddUser(u *User) (id int64, err error) {
	o := orm.NewOrm()
	id, err = o.Insert(u)
	return
}
func FetchUsers() (u []User, err error) {
	o := orm.NewOrm()
	_, err = o.QueryTable(new(User)).RelatedSel().Filter("Status", "Active").Limit(-1).All(&u)
	if err != nil {
		return nil, err
	}
	return u, nil
}
func GetAllUsers(args ...string) (u []User, err error) {

	// .Filter("Status",status).Limit(-1)
	if len(args) > 1 {
		return u, errors.New("Paramaters Wrong")
	}
	// var status string

	/*if len(args) == 0{
	      status = "Active"
	  }else{
	      status = args[0]
	  }*/

	o := orm.NewOrm()
	_, err = o.QueryTable(new(User)).RelatedSel().All(&u)
	if err != nil {
		return nil, err
	}
	return u, nil
}
func GetUserProjects(u int) (uo []User, err error) {
	o := orm.NewOrm()
	_, err = o.QueryTable(new(User)).RelatedSel().Filter("user_id", u).All(&uo)
	if err != nil {
		return uo, err
	}
	return uo, nil
}
func DeleteUser(id int) error {
	o := orm.NewOrm()

	_, err := o.QueryTable(new(User)).Filter("user_id", id).Update(orm.Params{"status": "Inactive"})
	return err
}

func UpdateUser(id int) error {

	o := orm.NewOrm()

	val, err := o.QueryTable(new(User)).Filter("user_id", id).Update(orm.Params{"role": "Admin"})

	fmt.Println(val)

	return err

}

func UpdateUserEmail(id int, emails string) error {

	o := orm.NewOrm()

	_, err := o.QueryTable(new(User)).Filter("user_id", id).Update(orm.Params{"email": emails})

	return err

}

func GetUserByCred(username1 string, password1 string) (u User, err error) {

	o := orm.NewOrm()

	err = o.QueryTable(new(User)).Filter("username", username1).Filter("password", password1).One(&u)
	if err != nil {
		fmt.Println("err : ", err)
	}
	return u, err

}
