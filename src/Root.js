import React, { Component } from 'react';


class Root extends Component {
    state = {
        isLoading: false,
    };

    componentDidMount() {
        this.loadImage(this.props.imgUrl)
    }
    componentWillReceiveProps(nextProps) {
        this.loadImage(nextProps.imgUrl)
    }
    componentWillMount() {
        this.setState({
            isLoading: false,
            }
        )
    }

    loadImage = (src) => {
        this.setState({ isLoading: true });

        let img = new Image();
        img.onload = () => {
            this.setState({ isLoading: false })
        };

        img.src = src
    };

    render() {
        const { imgUrl } = this.props;
        const { isLoading} = this.state;

        return (
            <div>
                {isLoading ? <p>Загружаю ...</p> : <img src={imgUrl} alt='season' />}
            </div>
        )
    }
}

export default Root;
