const http = require("http") 
const server = http.createServer((req,res)=>{
    const ui =`
    <div style =
    "width :200px ; height :200px;background:deeppink;">
    <h1 style = "font-family :sans-sarif;color :white>Coding ott</h1>"

    </div>
    `
    res.writeHead(200,{'Content-Type ': 'text/plain'})
    res.write(ui)
    res.end()
})
server.listen(8080)


/*
Response related functions :
1.end() - to disconnect user from server
          stateless protocol
2.write() - to send response or result 
          -you can code html
*Module (Built-in)
1.http -to create a server 

Content-Type :
1.mp4 -video/mp4
2.3gp -video/3gp
3.mp3 - audio/mp3
4.pdf -application/pdf
5.html -text/html
6.text -text/plain


*/ 