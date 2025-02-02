import OpenAI from 'openai'

async function getAIResponse(rolePrompt, userPrompt, updateResponseArea) {

    //Takes role prompt, user prompt and a function to set a value somewhere. Other areas then using the state of the setter have the response streamed.

    const aiKey = import.meta.env.VITE_OPENAPI_KEY
    console.log(aiKey+" hereee")

    console.log(rolePrompt + userPrompt)

    const client = new OpenAI({ apiKey: aiKey, dangerouslyAllowBrowser: true })
    const summaryReturn = await client.chat.completions.create({

        model: "gpt-4o-mini",
        messages: [
            { role: "system", content: rolePrompt },
            {
                role: "user",
                content: userPrompt,
            },
        ],
        store: true,
        stream: true,


    })


    let builtString = ""

    for await (const chunk of summaryReturn) {

        

        if (chunk.choices[0]?.delta?.content) {
            builtString += chunk.choices[0].delta.content;
        }
        updateResponseArea(builtString)

        //etterFunction(builtString)
    }
    




}

export default getAIResponse



