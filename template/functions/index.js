const axios = require('axios')
const functions = require('firebase-functions')

exports.createTaskHandler = functions
	.region('{{ GOOGLE_FUNCTIONS_REGION }}')
	.https
	.onRequest(async (req, res) => {
		// make a request to the backend service
		const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {
			title: req.body.task,
			userId: 1,
			completed: false,
		})

		// format the provided response to our needs
		res.json({
			id: response.data.id
		})
	})

function getSummaryData(tasks) {
	let summaryData = {
		userIds: new Set(),
		taskIds: new Set(),
		completedTasks: 0,
	}

	// for each task collect the relevant information
	for (const task of tasks) {
		// append the user id
		summaryData.userIds.add(task.userId)

		// append the task id
		summaryData.taskIds.add(task.id)

		// increase count if task is completed
		if (task.completed) {
			summaryData.completedTasks++
		}
	}

	return {
		...summaryData,
		usersCount: summaryData.userIds.size,
		tasksCount: summaryData.taskIds.size,
	}
}

exports.summaryHandler = functions
	.region('{{ GOOGLE_FUNCTIONS_REGION }}')
	.https
	.onRequest(async (req, res) => {
		// make a request to the backend service
		const response = await axios.get('https://jsonplaceholder.typicode.com/todos')

		// calculate summary informaiton and format data
		const summaryData = getSummaryData(response.data)

		// format the provided response to our needs
		res.json({
			text: `Here's a summary of your tasks:\n• ${summaryData.usersCount} users created tasks in the system.\n• ${summaryData.tasksCount} tasks are stored in the system.\n• ${summaryData.completedTasks} are completed tasks.`
		})
	})

exports.getTaskHandler = functions
	.region('{{ GOOGLE_FUNCTIONS_REGION }}')
	.https
	.onRequest(async (req, res) => {
		// make a request to the backend service
		const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${req.query.id}`)

		// format the provided response to our needs
		res.json({
			text: `*title:* ${response.data.title}\n*completed:* ${response.data.completed ? 'Yes' : 'No'}`
		})
	})

exports.deleteTaskHandler = functions
	.region('{{ GOOGLE_FUNCTIONS_REGION }}')
	.https
	.onRequest(async (req, res) => {
		// make a request to the backend service
		const response = await axios.delete(`https://jsonplaceholder.typicode.com/todos/${req.query.id}`)

		// format the provided response to our needs
		res.json({})
	})
