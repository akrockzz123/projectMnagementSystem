package handlers

import (
	"PMD/controllers"

	"github.com/gin-gonic/gin"
)

func SetupProjectRoutes(engine *gin.Engine){
    r := engine.Group("/project")
    r.GET("/projects",controllers.GetAllActiveProjects)
    r.GET("/all",controllers.GetAllProjects)
    r.GET("/inactive",controllers.GetAllInactiveProjects)
    r.POST("/add",controllers.AddProject)
    r.POST("/remove/:project_id",controllers.RemoveProject)
    r.GET("/:project_id",controllers.GetSpecificProject)
    // r.GET("/ape",controllers.Test)
}
