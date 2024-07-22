const express = require('express')
const ShortUrl = require('./models/shortUrl')

const app = express()

const  mongoose = require('mongoose')
const connectDB = async()=> {
   await mongoose.connect('mongodb+srv://vanshsingh:urlshortnerbyvansh@cluster0.qhi0fmh.mongodb.net/urlShortner',)
    console.log(`Connected to ${mongoose.connection.host}`)
} 

connectDB()

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:false}))


app.get('/',async (req,res) =>{
    const shortUrls = await ShortUrl.find()
    res.render('index',{shortUrls: shortUrls})
});

app.post('/shortUrls', async (req,res)=>{
   await ShortUrl.create({full: req.body.fullUrl})
    res.redirect('/')
});

app.get('/:shortUrl',async (req,res)=>{
    const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl})
    if (shortUrl== null) return res.sendStatus(404)

    shortUrl.Clicks++;
    shortUrl.save()
    res.redirect(shortUrl.full)
})

app.listen(process.env.PORT || 5000);

