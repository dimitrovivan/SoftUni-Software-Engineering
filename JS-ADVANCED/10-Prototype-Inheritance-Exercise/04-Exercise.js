let solve = () => {

    function Post(title, content) {

        this.title = title;
        this.content = content;

    }

    Post.prototype.toString = function () {

        return `Post: ${this.title}\nContent: ${this.content}`;
    }

    Post.prototype.test = '2';

    function SocialMediaPost(title, content, likes, dislikes) {

        Post.call(this, title, content);
        this.likes = likes;
        this.dislikes = dislikes;
        this.comments = [];

        this.addComment = (comment) => {

            this.comments.push(comment);
        }

         this.toString = () => {

            let result = Post.prototype.toString.call(this)
             + `\nRating: ${this.likes - this.dislikes}\nComments: \n${this.comments.reduce((acc,x) => acc += `* ${x}\n`, '')}`;

             return result;
             
         }
    }

    SocialMediaPost.prototype = Object.create(Post.prototype);


    function BlogPost(title, content, views) {

        Post.call(this, title, content);

        this.views = Number(views);

        this.view = () => this.views += 1;

        this.toString = () =>  Post.prototype.toString.call(this) + `\nViews: ${this.views}`;
    }

    return {
        Post,
        SocialMediaPost,
        BlogPost,
    }
}

let postBuilder = solve();

let socialMediaPost = new postBuilder.SocialMediaPost('Flex Problem','Im too big', 10, 6);
socialMediaPost.addComment('xaxaxa');
socialMediaPost.addComment('xaxaxa2');
console.log(socialMediaPost.toString());

let ordinaryPost = new postBuilder.Post('Simple Title', 'Im back');
console.log(ordinaryPost.toString());

let blogPost = new postBuilder.BlogPost('Blogpost', 'Lets talk about me', 10);
console.log(blogPost);
blogPost.view();
blogPost.view();
console.log(blogPost.toString());


