
import React from 'react';
import './Directory.styles.scss';
import MenuItem from '../menu-item/Menu-item.components';

class Directory extends React.Component {
   constructor() {
      super();

      this.state = {
         sections: [
            {
             title: 'chinese',
              // title: 'hats',
             imageUrl: 'https://images.unsplash.com/photo-1526318896980-cf78c088247c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80',
              // imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
              id: 1,
              linkUrl: 'shop/hats'
            },
            {
              title: 'pizza',
              imageUrl: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80',
              // imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
              id: 2,
              linkUrl: 'shop/jackets'
            },
            {
              title: 'Asian Cusine',
              imageUrl: 'https://images.unsplash.com/photo-1590330813083-fc22d4b6a48c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80',
              id: 3,
              linkUrl: 'shop/sneakers'
            },
            {
              title: 'Indian',
              imageUrl: 'https://images.unsplash.com/photo-1595436252086-7496fb8c41e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80',
              // size: 'large',
              id: 4,
              linkUrl: 'shop/womens'
            },
            {
              title: 'Continental',
              imageUrl: 'https://images.unsplash.com/photo-1595436252086-7496fb8c41e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80',
              // size: 'large',
              id: 5,
              linkUrl: 'shop/mens'
            }
          ]
      }
   }

   render() {
      return (
         <div className='directory-menu'>
           {this.state.sections.map(({ id, ...otherSectionProps }) => (
             <MenuItem key={id} {...otherSectionProps} />
           ))}
         </div>
       );
   }
}

export default Directory;
