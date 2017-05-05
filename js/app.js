/**
 * Created by abalashov on 4/13/17.
 */
console.log(React);
console.log(ReactDOM);

class CityForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleSubmit(event){
        alert('A city was submitted: ' + this.state.value);
          event.preventDefault();
         }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    City:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}


var WeatherContainer = React.createClass({

    getInitialState: function(){
        return {
            coord: [],
            weather: [],
            base: [],
            main: [],
            visibility: [],
            wind: [],
            clouds: [],
            dt: [],
            sys: [],
            id: [],
            name: [],
            cod: []
        }
    },

    componentDidMount: function(){
        var _this = this,
            city = 'Moscow';



        axios.get('http://api.openweathermap.org/data/2.5/weather?q='+ city +'&appid=6421848aff2d6167b679e51b9ad01f8e').then(function(response){
            _this.setState({
                            coord: response.data.coord,
                            weather: response.data.weather,
                            base: response.data.base,
                            main: response.data.main,
                            visibility: response.data.visibility,
                            wind: response.data.wind,
                            clouds: response.data.clouds,
                            dt: response.data.dt,
                            sys: response.data.sys,
                            id: response.data.id,
                            name: response.data.name,
                            cod: response.data.cod
            })
            console.log(response.data);
            console.log(response.status);
        });
    },

    render: function(){
        return (
            <div>
                <p>  </p>
                <p>City geo location, longitude: {this.state.coord.lon}</p>
                <p>City geo location, latitude: {this.state.coord.lat}</p>

                <p>Weather condition id: {this.state.weather.id}</p>
                <p>Group of weather parameters (Rain, Snow, etc.): {this.state.weather.main}</p>
                <p>Weather condition within the group: {this.state.weather.description}</p>
                <p>Weather icon id: {this.state.weather.icon}</p>

                <p>Internal parameter: {this.state.base}</p>

                <p>Temperature. Unit Default Kelvin, Metric Celsius, Imperial Fahrenheit: {this.state.main.temp}</p>
                <p>Atmospheric pressure (on the sea level): {this.state.main.pressure}</p>
                <p>Humidity, %: {this.state.main.humidity}</p>
                <p>Minimum temperature at the moment: {this.state.main.temp_min}</p>
                <p>Maximum temperature at the moment: {this.state.main.temp_max}</p>

                <p>???: {this.state.visibility}</p>

                <p>Wind Speed: {this.state.wind.speed}</p>
                <p>Wind direction, degress: {this.state.wind.deg}</p>

                <p>Cloudiness, % : {this.state.clouds.all}</p>
                <p>Time of data calculation, unix, UTC: {this.state.dt}</p>

                <p>Internal parameter: {this.state.sys.type}</p>
                <p>Internal parameter: {this.state.sys.id}</p>
                <p>Internal parameter: {this.state.sys.message}</p>
                <p>Country code (RU, DE, etc.): {this.state.sys.country}</p>
                <p>Sunrise time, unix, UTC: {this.state.sys.sunrise}</p>
                <p>Sunset time, unix, UTC: {this.state.sys.sunset}</p>

                <p>City ID: {this.state.id}</p>
                <p>City name: {this.state.name}</p>
                <p>Internal parameter: {this.state.cod}</p>

            </div>
        );
    }

});



/**


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
            {newsTemplate}
            <strong className= {'news_count' + (data.length > 0 ?'':'none')}>Vsego novostey: {data.length}</strong>
        </div>
        );
    }
});

**/

var App = React.createClass({
    render: function(){
        return(
            <div className="app">
                <CityForm />
                <WeatherContainer />

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


