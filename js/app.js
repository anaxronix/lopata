/**
 * Created by abalashov on 4/13/17.
 */
console.log(React);
console.log(ReactDOM);

var my_news = [
    {
        author: 'Sasha',
        text: 'One times',
        bigText: 'One times One times One times One times One times One times One times'
    },
    {
        author: 'Vasya',
        text: 'Sometimes',
        bigText: 'Sometimes Sometimes Sometimes Sometimes Sometimes Sometimes Sometimes'
    },
    {
        author: 'Slava',
        text: 'Never',
        bigText: 'Never Never Never Never Never Never Never Never Never Never Never Never'
    }
];




var Article = React.createClass({

    getInitialState: function(){
        return {
            visible: false
        };
    },
    readmoreClick: function(e) {
        e.preventDefault();
        this.setState({visible: true});
    },

    render: function(){
        var author = this.props.data.author,
            text = this.props.data.text,
            bigText = this.props.data.bigText,
            visible = this.state.visible;

        return(
            <div className='article'>
                <p className='news_author'>{author}:</p>
                <p className='news_text'>{text}</p>
                <a href="#" onClick={this.readmoreClick} className={'news_readmore' + (visible ? 'none': '')}>Read more...</a>
                <p className={'news_big-text' + (visible ? '': 'none')}>{bigText}</p>
            </div>

        )
    }
});




var News = React.createClass({
    render: function(){
        var data = this.props.data;

        var newsTemplate;

        if (data.length > 0) {


            newsTemplate = data.map(function (item, index) {
                return (
                    <div key={index}>
                        <Article data={item} />
                    </div>
                )
            })
        } else {
            newsTemplate = <p> Not news</p>
        }
        console.log(newsTemplate);
        return(
        <div className="news">
            {newsTemplate}   {/* Not news, now. */}
            <strong className= {'news_count' + (data.length > 0 ?'':'none')}>Vsego novostey: {data.length}</strong>
        </div>
        );
    }
});



var App = React.createClass({
    render: function(){
        return(
            <div className="app">
                <h3> News</h3>
                <News data={my_news} />
            </div>

        );
    }
});




ReactDOM.render(
    <App />,
    document.getElementById('root')
);



//ReactDOM.render(
//    React.createElement('h1', null, 'Hello world!'),
//    document.getElementById('root')
//);

//ReactDOM.render(
//    <h1>Hello, world!</h1>,
//    document.getElementById('root')
//);

//var photos = ['images/cat.jpg', 'images/dog.jpg', 'images/owl.jpg']

//ReactDOM.render(
//    <App>
//        <Photos photos=photos />
//        <LastNews />
//        <Comments />
//    </App>,
//    document.getElementById('root')
//);


