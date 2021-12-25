
window.addEventListener('DOMContentLoaded', function () {
       

        let array1=[{title : "Discovery’s newest property in Kaua’i North Shore Preserve", description : "Discovery Land Company is excited to announce our 25th residential club community on the majestic North Shore of Kaua’i. North Shore Preserve, a one-of-a-kind residential community, spans one thousand acres at the base of the mountains in the pastoral Hanalei valley. This newly re-imagined, low-density project is a secluded and peaceful island oasis with limited initial homesite and hale offerings."},
                    {title : "James Island Discovery's Newest Property ",description : "Discovery Land Company is excited to announce our 24th private luxury residential community. James Island Golf and Ocean Club, a 780-acre private island in British Columbia with only 76 lots, is Discovery Land Company’s most exclusive community to date and Discovery’s first project in Canada."},
                    {title : "CostaTerra Discovery's 23rd property",description : "Discovery Land Company, the world’s leading developer of luxury private residential communities, clubs and resorts, has announced its 23rd property and first in Europe."},
                    {title : "Troubadour To Open Golf Course Fall 2019",description : "Troubadour Golf & Field Club, a Discovery Land Company community, is pleased to announce the opening of its 18-hole Tom Fazio-designed golf course this fall."}]

        console.log($)
        let count = 0;
        let next = document.getElementById('nextB');
        let title = document.querySelector('.actualName')
        let description = document.querySelector('.contentDescription');
        let prev = document.getElementById('prevB')
       

        console.log(next.innerHTML)
        console.log(title)
      


        title.innerHTML = array1[0].title;
        description.innerHTML = array1[0].description;

        $("#nextB").click(function () {
            console.log(this)
            if(count < 3) {
               
                count = count +1;
                console.log(count)
               
            }
            $(".actualName").html( array1[count].title)
           // title.innerHTML =
            description.innerHTML = array1[count].description;        
           
    })
      // next.addEventListener('click', )



        prev.addEventListener('click', function () {
            if(count>0) {
                count = count -1;
            }
            
          
            title.innerHTML = array1[count].title;
            description.innerHTML = array1[count].description;

            if(count<0){
                count=0;
            console.log("less than 0")
            title.innerHTML = array1[count].title;
            description.innerHTML = array1[count].description;
            }

        })



    }
)

window.addEventListener('DOMContentLoaded', function () {
        //Panel JS Part

        let b1=[{title1 : "10 Fairways to Tee Off on Now", description1 : "Vegas Magazine | September 2021"},
        {title1 : "Where Sun, Sand and Splendor Are Still to Be Discovered ",description1 : "New York Times | June 9, 2021"},
        {title1 : "No Longer Waiting for Retirement",description1 : "New York Times International Homes | March 27-28, 2021"},
        {title1 : "Green Golf Homes in Five Destinations",description1 : "New York Times | September 11, 2020"}]

        
        let b2=[{title2 : "Golf Real Estate Roars Back as Vacation Homes Boom in Pandemic", description2 : "Bloomberg I September 2021"},
        {title2 : "Mike Meldman is one of the most influential real-estate moguls in the country thanks to his luxurious live-in resorts, which became irresistible to the rich and famous during the pandemic ",description2 : "Business Insider |  June 4, 2021"},
        {title2 : "Golf and Pickleball are Having a Love Affair",description2 : "New York Times | March 22, 2021"},
        {title2 : "Bring Your Clubs. And the Kids.",description2 : "New York Times | September 11, 2020"}]

        
        let b3=[{title3 : "Brexit drives British millionaires to Portugal for tax and EU perks — but it’s about to get complicated", description3 : "Telegraph UK | August 20, 2021"},
        {title3 : "There's a real buy-in for resort communities offering amusement and amenities",description3 : "Luxury Magazine | Spring/Summer 2021"},
        {title3 : "For Many, the Pandemic Has Led to the 'Discovery' of Golf",description3 : "New York Times | March 22, 2021"},
        {title3 : "Billionare Barn Debuts at Quant 850-acre Silo Ridge Field Club",description3 : "Forbes | August 2020"}]

        
        let b4=[{title4 : "This Property Company Ups the Ante with  Luxury and Sustainability", description4 : "Sunset Magazine | August 13, 2021"},
        {title4 : "This Blue Chip Caribbean Island Hopes to Dethrone St. Barts",description4 : "New York Post | April 5, 2021"},
        {title4 : "Celebrities Keep Flocking to Discovery Resorts During the Pandemic. Here's Why",description4 : "Elle Decor | September 2020"},
        {title4 : "How Discovery Land Company's Mike Meldman Develops the World's Most Exclusive Private Clubs and Resort Communities",description4 : "CSQ | June 17, 2020"}]

        
        console.log($)
        let count = 0;
        let next = document.getElementById('nextButton');
        let prev = document.getElementById('prevButton')

        let title1 = document.querySelector('.titleName1')
        let description1 = document.querySelector('.contentName1');

        let title2 = document.querySelector('.titleName2')
        let description2 = document.querySelector('.contentName2');

        let title3 = document.querySelector('.titleName3')
        let description3 = document.querySelector('.contentName3');

        let title4 = document.querySelector('.titleName4')
        let description4 = document.querySelector('.contentName4');

        title1.innerHTML = b1[0].title1;
        description1.innerHTML = b1[0].description1;

        title2.innerHTML = b2[0].title2;
        description2.innerHTML = b2[0].description2;

        title3.innerHTML = b3[0].title3;
        description3.innerHTML = b3[0].description3;

        title4.innerHTML = b4[0].title4;
        description4.innerHTML = b4[0].description4;

        $("#nextButton").click(function () {
        console.log(this)
        if(count < 3) {

        count = count +1;
        console.log(count)

        }
        $(".titleName1").html( b1[count].title1)
        $(".contentName1").html(b1[count].description1)

        $(".titleName2").html( b2[count].title2)
        $(".contentName2").html(b2[count].description2)

        $(".titleName3").html( b3[count].title3)
        $(".contentName3").html(b3[count].description3)

        $(".titleName4").html( b4[count].title4)
        $(".contentName4").html(b4[count].description4)


        })



        $("#prevButton").click(function () {
            
            if(count>0) {
                count = count -1;
            }
            $(".titleName1").html( b1[count].title1)
            $(".contentName1").html(b1[count].description1)
    
            $(".titleName2").html( b2[count].title2)
            $(".contentName2").html(b2[count].description2)
    
            $(".titleName3").html( b3[count].title3)
            $(".contentName3").html(b3[count].description3)
    
            $(".titleName4").html( b4[count].title4)
            $(".contentName4").html(b4[count].description4)
    
    
            })
    

})

