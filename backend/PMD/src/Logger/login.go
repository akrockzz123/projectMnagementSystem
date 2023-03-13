package logger

import (
	"encoding/json"
	"fmt"
	"io"
	"io/ioutil"
	"net/http"

	"github.com/beego/beego/orm"
	"github.com/gin-gonic/gin"
)

type User struct {
	ID    int    `orm:"column(id);pk"`
	Email string `orm:"column(email)"`

	Name string `orm:"column(name)"`
	//Password string `orm:"column(password)"`
	Role string `orm:"column(role)"`
}

type userPayload struct {
	UserName string `orm:"username"`
}

func Login(c *gin.Context) {
	// var input struct {
	// 	UserName string `json:"userName" binding:"required"`
	// 	//Password string `json:"password" binding:"required"`
	// }

	// if err := c.ShouldBindJSON(&input); err != nil {
	// 	c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	// 	return
	// }

	body, err := ioutil.ReadAll(c.Request.Body)

	fmt.Println(body, "sbdusbdu", c.Request.Body)
	if err != nil && err != io.EOF {
		c.JSON(http.StatusInternalServerError, "Internal Server Error")
		return
	}
	var dummy userPayload

	err = json.Unmarshal(body, &dummy)
	if err != nil {
		c.JSON(http.StatusInternalServerError, "Failed to Unmarshal")
		return
	}
	var userss User

	o := orm.NewOrm()

	fmt.Println(dummy.UserName, "heyyyyy")
	err1 := o.QueryTable("user").Filter("username", dummy.UserName).One(&userss)

	if err1 != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid userName or password"})
		return
	}

	// if user.Password != input.Password {
	// 	c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid UserName or password"})
	// 	return
	// }

	// if User.Role == "Admin" || User.Role == "admin" {
	// 	c.JSON(http.StatusOK, gin.H{"message": "Welcome admin!"})
	// 	return
	// }

	// c.JSON(http.StatusOK, gin.H{
	// 	"message":  "Welcome user!",
	// 	"userName": user.Name,
	// 	"userId":   user.ID,
	// })
}
