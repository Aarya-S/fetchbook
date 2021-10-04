const data = [{
    bookid : 1,
    bookname : "The Psychology of Money",
    img : "https://images-eu.ssl-images-amazon.com/images/I/51PV2vaUraL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    auther : "Morgan Housel",
    sellername : "Cloudtail India",
    description : "Timeless lessons on wealth, greed, and happiness doing well with money isn’t necessarily about what you know. It’s about how you behave. And behavior is hard to teach, even to really smart people. How to manage money, invest it, and make business decisions are typically considered to involve a lot of mathematical calculations, where data and formulae tell us exactly what to do. But in the real world, people don’t make financial decisions on a spreadsheet. They make them at the dinner table, or in a meeting room, where personal history, your unique view of the world, ego, pride, marketing, and odd incentives are scrambled together. In the psychology of money, the author shares 19 short stories exploring the strange ways people think about money and teaches you how to make better sense of one of life’s most important matters.",
    stock : "10",
    publisher : "Jaico Publishing House",
    tag : {
        category : "history", 
        sellerid: 101,
        price : "$50",
        address : "Renaissance Industrial Smart City, Kalyan-Sape Rd, Vashere, Maharashtra 421302", 
        delivery_status : true,
        condition : "better", 
        new : true, 
        instock : "2" 
    },
},
{
    bookid : 2,
    bookname : "Atomic Habits",
    img : "https://images-eu.ssl-images-amazon.com/images/I/51PV2vaUraL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    auther : "James Clear ",
    sellername : "Cloudtail India",
    description : "World-renowned habits expert James Clear has discovered a simpler system for transforming your life. He knows that lasting change comes from the compound effect of hundreds of small decisions – doing two push-ups a day, waking up five minutes early, or holding a single short phone call. He calls them atomic habits.In this ground-breaking book, Clear reveals how these tiny changes will help you get 1 percent better every day. He uncovers a handful of simple life hacks (the forgotten art of Habit Stacking, the unexpected power of the Two Minute Rule, or the trick to entering the Goldilocks Zone) and delves into cutting-edge psychology and neuroscience to explain why they matter. Along the way, he tells inspiring stories of Olympic gold medalists, leading CEOs and distinguished scientists who have used the science of small habits to stay productive, motivated and happy.",
    stock : "9",
    publisher : "Random House Business Books",
    tag : {
        category : "history", 
        price : "$60",
        address : "Renaissance Industrial Smart City, Kalyan-Sape Rd, Vashere, Maharashtra 421302",
        delivery_status : true,
        condition : "good", //(good/better/best)
        new : true, 
        instock : "2",}
},
{
        bookid : 3,
        bookname : "The Intelligent Investor",
        img : "https://images-eu.ssl-images-amazon.com/images/I/51PV2vaUraL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
        auther : "Benjamin Graham",
        sellername : "InIkao",
        description : "The greatest investment advisor of the twentieth century, Benjamin Graham taught and inspired people worldwide. Graham's philosophy of value investing -- which shields investors from substantial error and teaches them to develop long-term strategies -- has made The Intelligent Investor the stock market bible ever since its original publication in 1949.            Over the years, market developments have proven the wisdom of Grahams strategies. While preserving the integrity of Grahams original text, this revised edition includes updated commentary by noted financial journalist Jason Zweig, whose perspective incorporates the realities of todays market, draws parallels between Grahams examples and todays financial headlines, and gives readers a more thorough understanding of how to apply Grahams principles",
        stock : "6",
        publisher : "Harper Business",
        tag : {
            category : "history", 
            sellerid : 102,
            price : "$30",
            address : "69, Manjal Pettai Complex, A-15, Kasukadai Bazaar, Virudhunagar, Tamil Nadu 626001",
            delivery_status : false,
            condition : "good", //(good/better/best)
            new : false, 
            instock : "2",}
},
]
  
module.exports = {data}
