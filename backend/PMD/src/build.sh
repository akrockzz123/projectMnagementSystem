GOOS=linux GOARCH=amd64 CGO_ENABLED=0 go build -o main main.go &&
echo "Build Completed" &&
zip main.zip main && 
echo "Zipped" &&
aws lambda update-function-code --function-name  PMD --zip-file fileb://main.zip &&
echo "Uploaded to aws"


