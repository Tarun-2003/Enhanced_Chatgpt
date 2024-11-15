//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

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    organization: "org-Bw0TyLW6fIu8s53yP07qam52",
    apiKey:" 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",
});
const openai = new OpenAIApi(configuration);

async function callApi(){
const response = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: "Say this is a test",
  max_tokens: 7,
  temperature: 0,
});
console.log(response.data.choices[0].text);

}
callApi();





