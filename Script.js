function getID(product) {
    localStorage.setItem("ProductID", product);
    return;
}
function whatsapp() {
    window.location = "https://wa.me/+919824265200?";
}
function WA() {
    const ID = localStorage.getItem("ProductID");
    window.location = "https://wa.me/+919824265200?text=shangar.in " + ID;
}


function changeImage(source) {
    document.getElementById("main_image").src = source;
}

function changeContent() {


    var mainImage = document.getElementById("main_image");
    var smallImage_1 = document.getElementById("img_1");
    var smallImage_2 = document.getElementById("img_2");
    var smallImage_3 = document.getElementById("img_3");
    var smallImage_4 = document.getElementById("img_4");
    var smallImage_5 = document.getElementById("img_5");

    const productID = localStorage.getItem("ProductID");

    switch (productID) {


        // ANTIQUE BRASS START

        case "A|001":
            mainImage.src = "images/brass/11 (1).png"
            smallImage_1.src = "images/brass/11 (1).png";
            smallImage_2.src = "images/brass/11 (2).png";
            smallImage_3.src = "images/brass/11 (3).png";
            smallImage_4.src = "images/brass/11 (4).png";
            smallImage_5.src = "images/brass/11 (1).png";
            document.getElementById("content").innerHTML = "<b>This is the vishnu 10 Avatar Lota</b> .A lota (Hindi: लोटा, Odia: ଲୋଟା/ନୋଟା, Urdu: لوٹا) is a type of spouted globular (round), small-sized vessel made of brass, copper or plastic used in the Indian subcontinent since at least the 2nd millennium BC.In Dharmic religions, the copper lota has a sacred usage, such as in a yagna ritual during puja prayers, weddings and other sacred ceremonies. According to the ancient Indian/Hindu-origin traditional medicine system of ayurveda, drinking water stored in the copper lota has health and nutritional benefits"
            break;

        case "A|002":
            mainImage.src = "images/brass/12 (1).png"
            smallImage_1.src = "images/brass/12 (1).png";
            smallImage_2.src = "images/brass/12 (2).png";
            smallImage_3.src = "images/brass/12 (3).png";
            smallImage_4.src = "images/brass/12 (4).png";
            smallImage_5.src = "images/brass/12 (1).png";
            document.getElementById("content").innerHTML = "<b>This is a very beautiful brass temple.</b> <br> A temple is a building reserved for spiritual rituals and activities such as prayer and sacrifice. Religions which erect temples include Christianity , Hinduism (called mandir), Buddhism (often monasteries), Sikhism (whose temples are called gurudwara), Jainism (whose temples are sometimes called derasar), Confucianism (which are sometimes called the Temple of Confucius), and ancient religions such as the Ancient Egyptian religion and the Ancient Greek religion."
            break;

        case "A|003":
            mainImage.src = "images/brass/14 (1).png"
            smallImage_1.src = "images/brass/14 (1).png";
            smallImage_2.src = "images/brass/14 (2).png";
            smallImage_3.src = "images/brass/14 (3).png";
            smallImage_4.src = "images/brass/14 (4).png";
            smallImage_5.src = "images/brass/14 (1).png";
            document.getElementById("content").innerHTML = "<b>This is a very beautiful Persian Oil lamp.</b> <br> An oil lamp is a lamp used to produce light continuously for a period of time using an oil-based fuel source. The use of oil lamps began thousands of years ago and continues to this day, although their use is less common in modern times. They work in the same way as a candle but with fuel that is liquid at room temperature, so that a container for the oil is required. A textile wick drops down into the oil, and is lit at the end, burning the oil as it is drawn up the wick."
            break;

        case "A|004":
            mainImage.src = "images/brass/1 (1).png"
            smallImage_1.src = "images/brass/1 (1).png";
            smallImage_2.src = "images/brass/1 (2).png";
            smallImage_3.src = "images/brass/1 (3).png";
            smallImage_4.src = "images/brass/1 (4).png";
            smallImage_5.src = "images/brass/1 (1).png";
            break;

        case "A|005":
            mainImage.src = "images/brass/2 (2).png"
            smallImage_1.src = "images/brass/2 (1).png";
            smallImage_2.src = "images/brass/2 (2).png";
            smallImage_3.src = "images/brass/2 (3).png";
            smallImage_4.src = "images/brass/2 (4).png";
            smallImage_5.src = "images/brass/2 (1).png";
            break;

        case "A|006":
            mainImage.src = "images/brass/3 (1).png"
            smallImage_1.src = "images/brass/3 (1).png";
            smallImage_2.src = "images/brass/3 (2).png";
            smallImage_3.src = "images/brass/3 (3).png";
            smallImage_4.src = "images/brass/3 (2).png";
            smallImage_5.src = "images/brass/3 (1).png";
            document.getElementById("content").innerHTML = "<b>This is very beautiful Genghis Khan.</b> <br> Genghis Khan (born Temüjin; c. 1162 – August 25, 1227)[2] was the founder and first Great Khan (Emperor) of the Mongol Empire, which became the largest contiguous empire in history after his death. He came to power by uniting many of the nomadic tribes of the Mongol steppe and being proclaimed the universal ruler of the Mongols, or Genghis Khan. With the tribes of Northeast Asia largely under his control, he set in motion the Mongol invasions, which ultimately witnessed the conquest of much of Eurasia, and incursions by Mongol raiding parties as far west as Legnica in western Poland and as far south as Gaza."
            break;

        case "A|007":
            mainImage.src = "images/brass/4 (1).png"
            smallImage_1.src = "images/brass/4 (1).png";
            smallImage_2.src = "images/brass/4 (2).png";
            smallImage_3.src = "images/brass/4 (3).png";
            smallImage_4.src = "images/brass/4 (4).png";
            smallImage_5.src = "images/brass/4 (1).png";
            break;

        case "A|008":
            mainImage.src = "images/brass/5 (1).png"
            smallImage_1.src = "images/brass/5 (1).png";
            smallImage_2.src = "images/brass/5 (2).png";
            smallImage_3.src = "images/brass/5 (3).png";
            smallImage_4.src = "images/brass/5 (2).png";
            smallImage_5.src = "images/brass/5 (1).png";
            break;

        case "A|009":
            mainImage.src = "images/brass/6 (1).png"
            smallImage_1.src = "images/brass/6 (1).png";
            smallImage_2.src = "images/brass/6 (2).png";
            smallImage_3.src = "images/brass/6 (3).png";
            smallImage_4.src = "images/brass/6 (4).png";
            smallImage_5.src = "images/brass/6 (1).png";
            break;

        case "A|010":
            mainImage.src = "images/brass/7 (3).png"
            smallImage_1.src = "images/brass/7 (1).png";
            smallImage_2.src = "images/brass/7 (2).png";
            smallImage_3.src = "images/brass/7 (3).png";
            smallImage_4.src = "images/brass/7 (4).png";
            smallImage_5.src = "images/brass/7 (1).png";
            document.getElementById("content").innerHTML = ""
            break;

        case "A|011":
            mainImage.src = "images/brass/8 (2).png"
            smallImage_1.src = "images/brass/8 (1).png";
            smallImage_2.src = "images/brass/8 (2).png";
            smallImage_3.src = "images/brass/8 (3).png";
            smallImage_4.src = "images/brass/8 (4).png";
            smallImage_5.src = "images/brass/8 (5).png";
            document.getElementById("content").innerHTML = ""
            break;

        case "A|012":
            mainImage.src = "images/brass/9 (2).png"
            smallImage_1.src = "images/brass/9 (1).png";
            smallImage_2.src = "images/brass/9 (2).png";
            smallImage_3.src = "images/brass/9 (3).png";
            smallImage_4.src = "images/brass/9 (4).png";
            smallImage_5.src = "images/brass/9 (1).png";
            document.getElementById("content").innerHTML = ""
            break;

        // WOODEN START

        case "W|001":
            mainImage.src = "images/wooden/1 (1).png"
            smallImage_1.src = "images/wooden/1 (2).png";
            smallImage_2.src = "images/wooden/1 (3).png";
            smallImage_3.src = "images/wooden/1 (4).png";
            smallImage_4.src = "images/wooden/1 (2).png";
            smallImage_5.src = "images/wooden/1 (1).png";
            break;


        case "W|002":
            mainImage.src = "images/wooden/2 (1).png"
            smallImage_1.src = "images/wooden/2 (2).png";
            smallImage_2.src = "images/wooden/2 (3).png";
            smallImage_3.src = "images/wooden/2 (2).png";
            smallImage_4.src = "images/wooden/2 (2).png";
            smallImage_5.src = "images/wooden/2 (1).png";
            break;

        case "W|003":
            mainImage.src = "images/wooden/3 (1).png"
            smallImage_1.src = "images/wooden/3 (2).png";
            smallImage_2.src = "images/wooden/3 (3).png";
            smallImage_3.src = "images/wooden/3 (4).png";
            smallImage_4.src = "images/wooden/3 (2).png";
            smallImage_5.src = "images/wooden/3 (1).png";
            break;

        case "W|004":
            mainImage.src = "images/wooden/4 (1).png"
            smallImage_1.src = "images/wooden/4 (2).png";
            smallImage_2.src = "images/wooden/4 (3).png";
            smallImage_3.src = "images/wooden/4 (4).png";
            smallImage_4.src = "images/wooden/4 (2).png";
            smallImage_5.src = "images/wooden/4 (1).png";
            break;

        case "W|005":
            mainImage.src = "images/wooden/5 (1).png"
            smallImage_1.src = "images/wooden/5 (2).png";
            smallImage_2.src = "images/wooden/5 (3).png";
            smallImage_3.src = "images/wooden/5 (4).png";
            smallImage_4.src = "images/wooden/5 (2).png";
            smallImage_5.src = "images/wooden/5 (1).png";
            break;

        case "W|006":
            mainImage.src = "images/wooden/6 (1).png"
            smallImage_1.src = "images/wooden/6 (2).png";
            smallImage_2.src = "images/wooden/6 (3).png";
            smallImage_3.src = "images/wooden/6 (4).png";
            smallImage_4.src = "images/wooden/6 (2).png";
            smallImage_5.src = "images/wooden/6 (1).png";
            break;


        // BRASS BOX START


        case "B|001":
            mainImage.src = "images/Boxes/1 (3).png"
            smallImage_1.src = "images/Boxes/1 (1).png";
            smallImage_2.src = "images/Boxes/1 (2).png";
            smallImage_3.src = "images/Boxes/1 (3).png";
            smallImage_4.src = "images/Boxes/1 (4).png";
            smallImage_5.src = "images/Boxes/1 (3).png";
            break;

        case "B|002":
            mainImage.src = "images/Boxes/2 (2).png"
            smallImage_1.src = "images/Boxes/2 (1).png";
            smallImage_2.src = "images/Boxes/2 (2).png";
            smallImage_3.src = "images/Boxes/2 (3).png";
            smallImage_4.src = "images/Boxes/2 (4).png";
            smallImage_5.src = "images/Boxes/2 (2).png";
            break;

        case "B|003":
            mainImage.src = "images/Boxes/3 (5).png"
            smallImage_1.src = "images/Boxes/3 (1).png";
            smallImage_2.src = "images/Boxes/3 (2).png";
            smallImage_3.src = "images/Boxes/3 (3).png";
            smallImage_4.src = "images/Boxes/3 (4).png";
            smallImage_5.src = "images/Boxes/3 (5).png";
            break;

        case "B|004":
            mainImage.src = "images/Boxes/4 (4).png"
            smallImage_1.src = "images/Boxes/4 (1).png";
            smallImage_2.src = "images/Boxes/4 (2).png";
            smallImage_3.src = "images/Boxes/4 (3).png";
            smallImage_4.src = "images/Boxes/4 (4).png";
            smallImage_5.src = "images/Boxes/4 (5).png";
            break;

        case "B|005":
            mainImage.src = "images/Boxes/5 (1).png"
            smallImage_1.src = "images/Boxes/5 (2).png";
            smallImage_2.src = "images/Boxes/5 (3).png";
            smallImage_3.src = "images/Boxes/5 (4).png";
            smallImage_4.src = "images/Boxes/5 (5).png";
            smallImage_5.src = "images/Boxes/5 (6).png";
            break;

        case "B|006":
            mainImage.src = "images/Boxes/6 (2).png"
            smallImage_1.src = "images/Boxes/6 (1).png";
            smallImage_2.src = "images/Boxes/6 (2).png";
            smallImage_3.src = "images/Boxes/6 (3).png";
            smallImage_4.src = "images/Boxes/6 (4).png";
            smallImage_5.src = "images/Boxes/6 (3).png";
            break;

        case "B|007":
            mainImage.src = "images/Boxes/7 (2).png"
            smallImage_1.src = "images/Boxes/7 (1).png";
            smallImage_2.src = "images/Boxes/7 (2).png";
            smallImage_3.src = "images/Boxes/7 (3).png";
            smallImage_4.src = "images/Boxes/7 (1).png";
            smallImage_5.src = "images/Boxes/7 (2).png";
            break;

        case "B|008":
            mainImage.src = "images/Boxes/8 (1).png"
            smallImage_1.src = "images/Boxes/8 (2).png";
            smallImage_2.src = "images/Boxes/8 (3).png";
            smallImage_3.src = "images/Boxes/8 (4).png";
            smallImage_4.src = "images/Boxes/8 (5).png";
            smallImage_5.src = "images/Boxes/8 (6).png";
            break;

        case "B|009":
            mainImage.src = "images/Boxes/9 (2).png"
            smallImage_1.src = "images/Boxes/9 (1).png";
            smallImage_2.src = "images/Boxes/9 (2).png";
            smallImage_3.src = "images/Boxes/9 (3).png";
            smallImage_4.src = "images/Boxes/9 (4).png";
            smallImage_5.src = "images/Boxes/9 (3).png";
            break;


        // TEXTILE STARTED

        case "T|001":
            mainImage.src = "images/textile/1 (2).png"
            smallImage_1.src = "images/textile/1 (1).png";
            smallImage_2.src = "images/textile/1 (2).png";
            smallImage_3.src = "images/textile/1 (3).png";
            smallImage_4.src = "images/textile/1 (4).png";
            smallImage_5.src = "images/textile/1 (5).png";
            document.getElementById("content").innerHTML = " <b>This is a very beautiful Mochi Bharat.</b> <br> Mochi Bharat or leather embroidery is a style of embroidery that is common to most parts of this region. Mochi Bharat was actually developed to ornament leather objects and is usually created on shoes, animal saddles and trappings. In addition, gold and silver zari is greatly employed on accessories like leather belts, bags and wallets."
            break;

        case "T|002":
            mainImage.src = "images/textile/2 (1).png"
            smallImage_1.src = "images/textile/2 (1).png";
            smallImage_2.src = "images/textile/2 (2).png";
            smallImage_3.src = "images/textile/2 (6).png";
            smallImage_4.src = "images/textile/2 (4).png";
            smallImage_5.src = "images/textile/2 (5).png";
            document.getElementById("content").innerHTML = "<b>This is real gold dupatta.</b> <br> The dupattā is a hindu shawl traditionally worn by women in Indian subcontinent to cover the head and shoulders.The dupatta is currently used most commonly as part of the women's shalwar kameez outfit, and worn over the kurta and the gharara."
            break;


        case "T|003":
            mainImage.src = "images/textile/3 (2).png"
            smallImage_1.src = "images/textile/3 (1).png";
            smallImage_2.src = "images/textile/3 (2).png";
            smallImage_3.src = "images/textile/3 (3).png";
            smallImage_4.src = "images/textile/3 (2).png";
            smallImage_5.src = "images/textile/3 (1).png";
            document.getElementById("content").innerHTML = "<b>This is a very beautiful red choli.</b> <br> A choli (Hindi: चोली, Urdu: چولی, Gujarati: ચોળી, Marathi: चोळी, Nepali: चोलो cholo) (known in South India as ravike (Kannada: ರವಿಕೆ, Telugu: రవికె, Tamil: ரவிக்கை)) is a blouse or a bodice-like upper garment that is commonly cut short leaving the midriff bare, it is worn along with a sari in the Indian subcontinent. The choli is also part of the ghagra choli costume in the Indian subcontinent."
            break;


        case "T|004":
            mainImage.src = "images/textile/7 (2).png"
            smallImage_1.src = "images/textile/7 (1).png";
            smallImage_2.src = "images/textile/7 (2).png";
            smallImage_3.src = "images/textile/7 (7).png";
            smallImage_4.src = "images/textile/7 (4).png";
            smallImage_5.src = "images/textile/7 (5).png";
            document.getElementById("content").innerHTML = "<b>This is a very beautiful blue choli.</b> <br> A choli (Hindi: चोली, Urdu: چولی, Gujarati: ચોળી, Marathi: चोळी, Nepali: चोलो cholo) (known in South India as ravike (Kannada: ರವಿಕೆ, Telugu: రవికె, Tamil: ரவிக்கை)) is a blouse or a bodice-like upper garment that is commonly cut short leaving the midriff bare, it is worn along with a sari in the Indian subcontinent. The choli is also part of the ghagra choli costume in the Indian subcontinent."
            break;


        case "T|005":
            mainImage.src = "images/textile/5 (2).png"
            smallImage_1.src = "images/textile/5 (2).png";
            smallImage_2.src = "images/textile/5 (1).png";
            smallImage_3.src = "images/textile/5 (3).png";
            smallImage_4.src = "images/textile/5 (4).png";
            smallImage_5.src = "images/textile/5 (5).png";
            document.getElementById("content").innerHTML = "<b>This is very beautiful Blue Chaniya.</b> <br> Ghagra choli (also known as lehenga choli and locally as chaniya choli) is a type of ethnic clothing for women from Indian Subcontinent, notably in the Indian states of Rajasthan, Gujarat, Madhya Pradesh, Uttar Pradesh, Bihar, Haryana, Punjab, Himachal Pradesh, Uttarakhand, Jammu and Kashmir, as well as in the Pakistani provinces of Punjab and Sindh. In Punjab, the lehenga is traditionally worn with a kurti. It is a combination of the gagra or lehenga (long skirt) and the choli (blouse), however in contemporary and modern usage lehenga choli is the more popular and widely accepted term by fashion designers. "
            break;


        case "T|006":
            mainImage.src = "images/textile/6 (2).png"
            smallImage_1.src = "images/textile/6 (1).png";
            smallImage_2.src = "images/textile/6 (2).png";
            smallImage_3.src = "images/textile/6 (3).png";
            smallImage_4.src = "images/textile/6 (4).png";
            smallImage_5.src = "images/textile/6 (2).png";
            document.getElementById("content").innerHTML = "<b>This is a very beautiful pink choli.</b> <br> A choli (Hindi: चोली, Urdu: چولی, Gujarati: ચોળી, Marathi: चोळी, Nepali: चोलो cholo) (known in South India as ravike (Kannada: ರವಿಕೆ, Telugu: రవికె, Tamil: ரவிக்கை)) is a blouse or a bodice-like upper garment that is commonly cut short leaving the midriff bare, it is worn along with a sari in the Indian subcontinent. The choli is also part of the ghagra choli costume in the Indian subcontinent."
            break;


        case "P|001":
            mainImage.src = "images/paintings/1 (3).png"
            smallImage_1.src = "images/paintings/1 (2).png";
            smallImage_2.src = "images/paintings/1 (3).png";
            smallImage_3.src = "images/paintings/1 (4).png";
            smallImage_4.src = "images/paintings/1 (5).png";
            smallImage_5.src = "images/paintings/1 (6).png";
            document.getElementById("content").innerHTML = "<b>Very beautiful krishna pencil sketch.</b> <br> Krishna is a major deity in Hinduism. He is worshipped as the eighth avatar of Vishnu and also as the Supreme god in his own right. He is the god of protection, compassion, tenderness, and love; and is one of the most popular and widely revered among Indian divinities.Krishna's birthday is celebrated every year by Hindus on Krishna Janmashtami according to the lunisolar Hindu calendar, which falls in late August or early September of the Gregorian calendar"
            break;

        case "P|002":
            mainImage.src = "images/paintings/2 (3).png"
            smallImage_1.src = "images/paintings/2 (3).png";
            smallImage_2.src = "images/paintings/2 (1).png";
            smallImage_3.src = "images/paintings/2 (2).png";
            smallImage_4.src = "images/paintings/2 (3).png";
            smallImage_5.src = "images/paintings/2 (4).png";
            document.getElementById("content").innerHTML = "<b>Very beautiful Krishna painting.</b> <br><br>Raja Ravi Varma ( 29 April 1848 – 2 October 1906) was an Indian painter and artist. He is considered among the greatest painters in the history of Indian art. <br> Krishna is a major deity in Hinduism. He is worshipped as the eighth avatar of Vishnu and also as the Supreme god in his own right. He is the god of protection, compassion, tenderness, and love; and is one of the most popular and widely revered among Indian divinities.Krishna's birthday is celebrated every year by Hindus on Krishna Janmashtami according to the lunisolar Hindu calendar, which falls in late August or early September of the Gregorian calendar"
            break;

        case "P|003":
            mainImage.src = "images/paintings/3 (2).png"
            smallImage_1.src = "images/paintings/3 (1).png";
            smallImage_2.src = "images/paintings/3 (2).png";
            smallImage_3.src = "images/paintings/3 (4).png";
            smallImage_4.src = "images/paintings/3 (5).png";
            smallImage_5.src = "images/paintings/3 (6).png";
            document.getElementById("content").innerHTML = "<b> Very beautiful Vishnu painting </b> <br> Raja Ravi Varma ( 29 April 1848 – 2 October 1906) was an Indian painter and artist. He is considered among the greatest painters in the history of Indian art. <br> Vishnu is known as 'The Preserver' within the Trimurti, the triple deity of supreme divinity that includes Brahma and Shiva.In Vaishnavism, Vishnu is the supreme being who creates, protects, and transforms the universe."
            break;

        case "P|004":
            mainImage.src = "images/paintings/4 (2).png"
            smallImage_1.src = "images/paintings/4 (3).png";
            smallImage_2.src = "images/paintings/4 (8).png";
            smallImage_3.src = "images/paintings/4 (4).png";
            smallImage_4.src = "images/paintings/4 (5).png";
            smallImage_5.src = "images/paintings/4 (6).png";
            document.getElementById("content").innerHTML = "<b>Very beautiful Vishwakarma painting </b> <br> Raja Ravi Varma ( 29 April 1848 – 2 October 1906) was an Indian painter and artist. He is considered among the greatest painters in the history of Indian art. <br>Vishvakarma or Vishvakarman (Sanskrit: विश्वकर्मा, romanized: Viśvakarmā, lit. 'all maker') is a craftsman deity and the divine architect of the gods in contemporary Hinduism. In the early texts, the craftsman deity was known as Tvastar and the word 'Vishvakarma' was originally used as an epithet for any powerful deity. "
            break;

        case "P|005":
            mainImage.src = "images/paintings/5 (3).png"
            smallImage_1.src = "images/paintings/5 (2).png";
            smallImage_2.src = "images/paintings/5 (3).png";
            smallImage_3.src = "images/paintings/5 (4).png";
            smallImage_4.src = "images/paintings/5 (5).png";
            smallImage_5.src = "images/paintings/5 (1).png";
            document.getElementById("content").innerHTML = "<b>Very beautiful Lady painting </b> <br> Raja Ravi Varma (29 April 1848 – 2 October 1906) was an Indian painter and artist. He is considered among the greatest painters in the history of Indian art. His works are one of the best examples of the fusion of European academic art with a purely Indian sensibility and iconography. Specially, he was notable for making affordable lithographs of his paintings available to the public, which greatly enhanced his reach and influence as a painter and public figure. His lithographs increased the involvement of common people with fine arts and defined artistic tastes among common people"
            break;

        case "P|006":
            mainImage.src = "images/paintings/6 (2).png"
            smallImage_1.src = "images/paintings/6 (3).png";
            smallImage_2.src = "images/paintings/6 (4).png";
            smallImage_3.src = "images/paintings/6 (5).png";
            smallImage_4.src = "images/paintings/6 (6).png";
            smallImage_5.src = "images/paintings/6 (1).png";
            document.getElementById("content").innerHTML = "<b> Very beautiful Aribharat painting </b> <br> Embroidery in India includes dozens of embroidery styles that vary by region and clothing styles. Designs in Indian embroidery are formed on the basis of the texture and the design of the fabric and the stitch. The dot and the alternate dot, the circle, the square, the triangle, and permutations and combinations of these constitute the design.<br>Aribharat involves a hook, plied from the top but fed by silk thread from below with the material spread out on a frame. This movement creates loops, and repeats of these lead to a line of chain stitches."
            break;
    }

}

