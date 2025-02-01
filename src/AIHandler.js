import OpenAI from 'openai'
import { useState } from 'react'

async function getAIResponse(rolePrompt, userPrompt) {

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

        

        builtString = builtString + chunk.choices[0]?.delta?.content || ""

        //etterFunction(builtString)
    }
    




}

export default getAIResponse



