#!/bin/bash

# deploy firebase functions
firebase deploy --only functions:createTaskHandler,functions:summaryHandler,functions:getTaskHandler,functions:deleteTaskHandler

# apply releai workflow configs
rb apply -f ./configs/

# activate releai workflows
rb workflow:activate create_task_workflow -d user
rb workflow:activate summary_workflow -d user
rb workflow:activate get_task_workflow -d user
rb workflow:activate delete_task_workflow -d user
