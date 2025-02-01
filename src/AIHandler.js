import OpenAI from 'openai'
import { useState } from 'react'

function  getAIResponse(rolePrompt,userPrompt){

    console.log(rolePrompt + userPrompt)

    /*const client = new OpenAI({ apiKey: aiKey, dangerouslyAllowBrowser: true })
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

      //setSummResponse(builtString)
    }*/



}

export default getAIResponse



