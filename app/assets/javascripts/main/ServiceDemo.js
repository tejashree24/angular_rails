var app = angular.module('app');
		app.controller('ServiceDemo',ServiceDemo);
		app.controller('HeaderCtrl',HeaderCtrl);
		app.controller('FooterCtrl',FooterCtrl);
		// app.value("AppName","Whatever title is");

		//OR by defining an Object

		app.value("AppName",{
			"name": "ABC",
			"author": "ravi",
			"company": "Tata",
			version: 1
		});




function ServiceDemo($scope){

	$scope.getRequest = function(){
		console.log("get request");
	}

	this.artists = [
    {
        "artistId":1,
        "artistName":"AC/DC",
        "genre":"Rock",
        "image":"https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
        "description":"AC/DC are an Australian hard rock band, formed in 1973 by brothers Malcolm and Angus Young. To date they are one of the highest-grossing bands of all time."
    },
    {
        "artistId":2,
        "artistName":"Aerosmith",
        "genre":"Rock",
        "image":"https://homepages.cae.wisc.edu/~ece533/images/arctichare.png",
        "description":"Aerosmith is an American blues-based rock band. The band was formed in Boston, Massachusetts in 1970 by guitarist Joe Perry, bassist Tom Hamilton, singer Steven Tyler, and drummer Joey Kramer. In 1971, guitarist Brad Whitford joined the band and they began developing a following."
    },
    {
        "artistId":3,
        "artistName":"James Taylor",
        "genre":"Easy Listening",
        "image":"https://homepages.cae.wisc.edu/~ece533/images/baboon.png",
        "description":"James Taylor is an American singer-songwriter and guitarist. A five-time Grammy Award winner, Taylor was inducted into the Rock & Roll Hall of Fame in 2000."
    },
    {
        "artistId":4,
        "artistName":"Buddy Guy",
        "genre":"Blues",
        "image":"https://homepages.cae.wisc.edu/~ece533/images/barbara.png",
        "description":"George 'Buddy' Guy is an American blues guitarist and singer. He is a pioneer of the Chicago blues sound and has served as an influence to Eric Clapton, Jimi Hendrix and Stevie Ray Vaughan, among others."
    },
    {
        "artistId":5,
        "artistName":"Johny Cash",
        "genre":"Country",
        "image":"https://homepages.cae.wisc.edu/~ece533/images/boat.png",
        "description":"Johnny Cash was an American singer-songwriter, actor, and author, who has been called one of the most influential musicians of the 20th century. While primarily remembered as a country music icon, his songs and sound spanned many other genres including rockabilly, rock and roll, blues, folk, and gospel."
    }
];

	this.selectedArtist = this.artists[0];
	this.selectArtist = function(index){
		this.selectedArtist = this.artists[index];
	}
}

function HeaderCtrl(AppName){
	this.appTitle = AppName.name;

}

function FooterCtrl(AppName){
	this.appTitle = AppName.name;
}