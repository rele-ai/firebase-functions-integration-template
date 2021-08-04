// export template meta information
module.exports = {
    prompts: {
        GOOGLE_FUNCTIONS_REGION: {
            type: "string",
            default: "us-central1",
            label: "Google Functions Region"
        },
		GOOGLE_PROJECT_ID: {
			type: "string",
			required: true,
			label: "Google Project ID"
		},
    },
    completeMessage: "{{#inPlace}}To get started:\n\n  cd ./functions\n  npm install\n  npm run deploy {{else}}To get started:\n\n  cd {{destDirName}}/functions\n  npm install\n  npm run deploy{{/inPlace}}"
}
