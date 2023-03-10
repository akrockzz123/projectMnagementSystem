package controllers

import (
	"PMD/model"
	"encoding/json"
	"io"
	"io/ioutil"
	"net/http"
	"strconv"
	"github.com/gin-gonic/gin"
)

type UserPayload struct{
    Name string `json:"username"`
    Email string `json:"email"`
    Role string `json:"role"`
    Status string `json:"status"`
}
func GetAllUsers(c *gin.Context) {
	const functionName = "controllers.GetAllUsers"
	u, err := model.GetAllUsers()
	if err != nil {
		c.JSON(http.StatusInternalServerError, "Internal Server Error")
		return
	}
	c.JSON(http.StatusOK, u)
}
func GetUserById(c *gin.Context){
    const functionName = "controllers.GetUserById"
    idp := c.Param("user_id")
    id, err := strconv.Atoi(idp)
    if err != nil{
        c.JSON(http.StatusNotFound,gin.H{"Error":"Invalid ID"})
        return
    }
    u,err := model.GetProjecsOfUserID(id)
    if err != nil{
        c.JSON(http.StatusNotFound,"Query Error")
        return
    }
    c.JSON(http.StatusOK,u)
}
func Adduser(c *gin.Context) {
	const funnctionName = "controllers.Adduser"
	body, err := ioutil.ReadAll(c.Request.Body)
	if err != nil && err != io.EOF {
		c.JSON(http.StatusInternalServerError, "Internal Server Error")
		return
	}
	var dummy UserPayload
	err = json.Unmarshal(body, &dummy)
	if err != nil {
		c.JSON(http.StatusInternalServerError, "Failed to Unmarshal")
		return
	}
    var nuser model.User
    if dummy.Status == ""{
        dummy.Status = "Active"
    }
    nuser = model.User{
        Username: dummy.Name,
        Email:dummy.Email,
        Role: dummy.Role,
        Status: dummy.Status,
    }
	id, err := model.AddUser(&nuser)
	if err != nil {
		c.JSON(http.StatusInternalServerError, "Failed to Add")
		return
	}
	c.JSON(http.StatusOK, gin.H{"id": id})
}

func GetAllActiveUsers(c *gin.Context){
	const functionName = "controllers.GetAllActiveUsers"
	u, err := model.GetAllUsers("Active")
	if err != nil {
		c.JSON(http.StatusInternalServerError, "Internal Server Error")
		return
	}
	c.JSON(http.StatusOK, u)
}
func GetAllInactiveUsers(c *gin.Context){
	const functionName = "controllers.GetAllInactiveUsers"
	u, err := model.GetAllUsers("Inactive")
	if err != nil {
		c.JSON(http.StatusInternalServerError, "Internal Server Error")
		return
	}
	c.JSON(http.StatusOK, u)
}
func DeleteUser(c *gin.Context){
    const functionName = "controllers.DeleteUser"
    idp := c.Param("user_id")
    id, err := strconv.Atoi(idp)
    if err != nil{
        c.JSON(http.StatusNotFound,gin.H{"Error":"Invalid ID"})
        return
    }
    err = model.DeleteUser(id)
    if err != nil{
        c.JSON(http.StatusNotFound,"Query Error")
        return
    }
    c.JSON(http.StatusOK,gin.H{"msg":"Deleted Successfully"})

}
