require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })
const axios = require('axios')
const path = require('path')

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {

  const { createNode } = actions

  const { data } = await axios.get(`https://sheets.googleapis.com/v4/spreadsheets/${process.env.SHEET_ID}/values:batchGet?ranges=A1%3AW998&majorDimension=ROWS&key=${process.env.GCP_API_KEY}`)

  const intialArray = data.valueRanges[0].values

  const formattedData = intialArray.reduce((arr, curr, i, source) => {
    if (i === 0) return arr
    const rowObject = curr.reduce((obj, val, j) => {
      obj[source[0][j]] = val
      return obj
    }, {})  
    return [...arr, rowObject]
  }, [])

  formattedData.forEach(student => {
    const studentNode = {
      id : createNodeId(student.id),
      parent: '__SOURCE__',
      internal: {
        type: 'student',
        contentDigest: createContentDigest(student),
      },
      children: [],
      ...student
    }

    createNode(studentNode)
  })
}

// TODO make a graphql request to these newly created gatbsy nodes, and create a page for each one
