import React from 'react';
import styles from './List.module.scss';

class List extends React.Component {

  constructor(props: any) {
    super(props)
  }

  render (
    <div className={styles.List} data-testid="List">
      List Component
    </div>
  )
}

// const List = () => (
  
// );

// export default List;
