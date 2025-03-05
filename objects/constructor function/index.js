//using a a constructor function
const blog = {
    title: 'JOE',
    body: 'YK BACK IN THE DAY',
    author: 'Joeee',
    views: 100,
    comments: [
        {author: 'JOE', comment:'AMAZING'},
        {author: 'JOE', comment:'AMAZING'},
        {author: 'JOE', comment:'AMAZING'},
        {author: 'JOE', comment:'AMAZING'},
    ],
    islive: true
};



function PosT(title, body, auhtor) {
    this.title = title;
    this.body = body;
    this.auhtor = auhtor;
    this.views = 0;
    this.comments = [];
    this.islive = false;
};