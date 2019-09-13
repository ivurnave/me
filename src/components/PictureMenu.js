import React from 'react';

// Create a 2-column menu of pictures
// function PictureMenu (pictures, names) {
//     if (pictures.length !== names.length) {
//         return;
//     }

//     let rows = [];
//     for (let i=0; i<pictures.length; i+=2) {
//         let row = (
//         <div>
//             <image src={pictures[i]} alt={names[i]}>{names[i]}</image>
//             <image src={pictures[i+1]} alt={names[i+1]}>{names[i+1]}</image>
//         </div>
//         );
//         rows.push(row);
//     }
//     return (
//         <div>
//             {rows}
//         </div>
//     );
// }

class PictureMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // let pictures = this.props.pictures;
        // let names = this.props.names;
        let {pictures, names, dimX, dimY} = this.props;

        if (pictures.length !== names.length) {
            return;
        }
    
        let rows = [];
        for (let i=0; i<pictures.length; i+=2) {
            let row = (
            <div>
                <image src={pictures[i]} alt={names[i]} />
                <image src={pictures[i+1]} alt={names[i+1]}>{names[i+1]}</image>
            </div>
            );
            rows.push(row);
        }
        return (
            <div>
                {rows}
            </div>
        );
    }
}

export default PictureMenu;