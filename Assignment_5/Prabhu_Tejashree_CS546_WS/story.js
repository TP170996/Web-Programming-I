var express = require('express');
var router2 = express.Router();
const story= {
    storyTitle: "Wallflower",
    story: "I wasn't unfamiliar with the word. It was something I remembered hearing since I was able to grasp the fine art of polysyllabic language. Of course, in my experience, it had always been subtly laced with negativity. They told me that it wasn't something I was supposed to be. They told me to socialize more — okay, maybe they had a point there — but to open up to strangers I didn't know from Adam? Apparently, yes, that was exactly what I was to do. I had to 'put myself out there,' or something. They told me I couldn't be a wallflower. Wallflower was unnatural. Wallflower was wrong. So my impressionable younger self tried her best not to see the inherent beauty in the word. I wasn't supposed to see it; no one else did. I was terrified to recognize its rightness. And that was where Charlie came in.\n"
            +"Before I get any further, I feel obligated to mention that Charlie is not real. I question whether that makes a difference — it shouldn't, really. Fictional, factual, or seven-dimensional, his influence in my life is indisputable. But, to give credit where credit is overwhelmingly due, he comes from the brilliant mind of Stephen Chbosky, from the universe of his novel, The Perks of Being a Wallflower. In a series of anonymous letters to an unknown friend, Charlie tells his story of life, love, and high school: of skirting the fringes of life and of learning to make the leap. And from the first sentences, I was drawn to Charlie. I understood him. I was him. He was me. I felt acutely his fears of entering high school, his just-barely-perceptible separation from the rest of the student body, because these fears were mine as well.\n"
            +"What I didn't have, the singular distinction between this character and myself, was his vision. Even from the very beginning, Charlie's innocence and naiveté gave him an unparalleled ability to see beauty in everything and to acknowledge it without hesitation, exactly as I'd longed to allow myself to do. I had been scared to be the only one to value being a wallflower. But with Charlie came the promise that I wasn't alone. When I saw that he could see what I wanted to see, I suddenly found that I could see it, too. He showed me that the true beauty in being a wallflower was the ability to acknowledge freely that beauty, to embrace it for everything it was while still managing to 'put myself out there' on a level I hadn't thought myself capable. Charlie taught me not conformity, but the honest, open expression of myself, free from the vise-like fear of being judged by my peers. He told me that sometimes, they were wrong. Sometimes, it was okay to be a wallflower. Wallflower was beautiful. Wallflower was right.<br>And for that, Charlie, I am forever in your debt."
  }

router2.get('/', function(req, res){
    
   res.json(story);
});
router2.post('/', function(req, res){
   res.send('POST route on story.');
});

//export this router to use in our index.js
module.exports = router2;