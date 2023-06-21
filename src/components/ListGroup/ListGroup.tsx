import { useState } from "react";
import './ListGroup.css'
import styled from 'styled-components';

const List = styled.ul`
list-style: none;
padding: 0;
`;

interface ListItemProps{
  active : boolean;
}

const ListItem = styled.li<ListItemProps>`
  color : gray;
  background : ${props => props.active == true ? 'blue' : 'none'};
`


interface Props {
  items: string[];
  heading: string;
  onSelected : (item : string) => void;
  onSelectedIndex : (item : number) => number;
}

function ListGroup({ items, heading, onSelected, onSelectedIndex}: Props) {
  let [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{heading}</h1>
      <List>
        {items.map((item, index) => (
          <ListItem

            active = {selectedIndex === index}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item "
            }
            key={item}
            onClick={() => {
                onSelected(item);
                let inde = onSelectedIndex(index);
                
              setSelectedIndex(inde);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
