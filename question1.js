async function fetchdata() {
  try {
    // make api request
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_embed=comments&_expand=user`
    ) // get data
    // check if the request is successfull
    if (!response.ok) throw new Error(`HTTP error status: ${response.status}`)
    // make them readable
    const authors = await response.json()
    let fetchdata = {}

    for (let i = 0; i < authors.length; i++) {
      fetchdata.push({
        id: authors[i].user.id,
        name: authors[i].name,
        title: authors[i].title,
        body: authors[i].body,
        comments: authors[i].comments,
        body: authors[i].body,
      })
    }
  } catch (error) {
    console.log("Error fetching user data", error)
    return null
  }
}
async function display() {
  let data = await fetchdata(1)

  console.log(data)
}
display()
