/* global $ */


console.log("test");


var data;
data=[
{
    name:"Land Pollution",
    info:{
        what: "Land pollution is the deterioration of the earth’s land surfaces, often directly or indirectly as a result of man’s activities and their misuse of land resources. Pollution results in changes in the land such as soil erosion, or the lost of habitat of animals.",
        where: "Land pollution occurs everywhere there is human activity. Big industrial companies dump out tons and tons of waste into the land, air, and water everyday",
        when: "land when",
        why: "Land pollution affects many things on the planet such as: soil climate change patterns, wildlife and even human health. The land is literally the base of our ecosystem. We walk and survive on it, yet continue to abuse it. It is in our interest to understand how we're treating it, and then we can take care of it and nurture it.",
        who: "land Industrial activities often release toxic and material wastes onto the land or into the atmosphere where they settle onto the land. While most developed countries now regulate land dumping and emissions, the regulations balance the costs to industry and do not necessarily adequately safeguard the integrity of our biosphere or more specifically, human health.",
        how: ['Limit your consumption of material goods','Stopping deforestation','Limiting chemical Usage',"Conserving energy"],
    },
    image:[]
}, 
{
    name:"Water Pollution",
    info:{
        what: "Water pollution occurs when harmful substances—often chemicals or microorganisms—contaminate a stream, river, lake, ocean, aquifer, or other body of water, degrading water quality and rendering it toxic to humans or the environment.",
        where: "Water pollutions happens in bodies of water such as: lakes, rivers, streams, oceans.",
        when: "",
        why: "The main problem caused by water pollution is that it kills organisms that depend on these water bodies. Dead fish, crabs, birds and seagulls, dolphins, and many other animals often wind up on beaches, killed by pollutants in their habitat ",
        who: "Many factories dump tons of waste into pockets of water such as lakes or rivers",
        how: ["Keep out oils, fat, or grease from the sink.", "Abstain from flushing contaminated liquids, pills, drugs, or medications down the drain.", "Desist from using the toilet as a bin.", "Avoid direct dumping into water systems."]
    },
    image:[]
},
{
    name:"Green house gases",
    info:[],
    image:[]
},
{
    name:"Natural Disasters",
    info:[],
    image:[]
},
{
    name:"Rising Sea Level",
    info:[],
    image:[]
},
{
    name:"Solutions",
    info:[],
    image:[]
}
];

var index=1;



function updatePage(index){
var pageData=data[index];
console.log($(".name"));


$(".name").text(pageData.name);
}
updatePage(2);