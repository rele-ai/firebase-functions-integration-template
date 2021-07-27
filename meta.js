// export template meta information
module.exports = {
    prompts: {
        GOOGLE_FUNCTIONS_REGION: {
            type: "string",
            required: true,
            label: "Google Functions Region"
        },
		GOOGLE_PROJECT_ID: {
			type: "string",
			required: true,
			label: "Google Project ID"
		},
    },
    completeMessage: "{{#inPlace}}To get started:\n\n  npm install\n  rb app:tokens | grep 'APP_' | sed 's/: /=/g' >> .env\n  npm run dev OR rb deploy:[user/org]{{else}}To get started:\n\n  cd {{destDirName}}\n  npm install\n  rb app:tokens | grep 'APP_' | sed 's/: /=/g' >> .env\n  npm run dev OR rb deploy:[user/org]{{/inPlace}}"
}
