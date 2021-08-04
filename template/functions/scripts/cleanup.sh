#!/bin/bash

# deploy firebase functions
firebase functions:delete createTaskHandler summaryHandler getTaskHandler deleteTaskHandler --force

# activate releai workflows
rb workflow:deactivate create_task_workflow -d user
rb workflow:deactivate summary_workflow -d user
rb workflow:deactivate get_task_workflow -d user
rb workflow:deactivate delete_task_workflow -d user

# apply releai workflow configs
rb delete -f ./configs/
