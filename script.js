const skills = [
    {name: "html", porcentagem: "84%"},
    // {name: "next", porcentagem: "10%"},
    {name: "vue", porcentagem: "50%"},
    {name: "react", porcentagem: "90%"},
    {name: "nest", porcentagem: "68%"},
    {name: "sass", porcentagem: "50%"},
    {name: "node", porcentagem: "65%"},
    // {name: "javascript", porcentagem: "50%"},
    {name: "typescript", porcentagem: "50%"},
    {name: "css", porcentagem: "85%"},
]

skills.map((item) => {
    $(".skillsBar").append(`
    <div>
        <h3>${item.name}</h3>
        <div class="bar-out">
            <div style="width: ${item.porcentagem} "class="inside-bar"></div>
        </div>
    </div>
    `)
}) 