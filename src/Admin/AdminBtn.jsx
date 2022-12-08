// import { Td } from '@chakra-ui/react/dist';
import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
} from "@chakra-ui/react";

export default function AdminBtn({ getData, todo }) {
  /// TOGGLE STATUS

  const handleToggle = async (id, status) => {
    // console.log(typeof(newStatus))
    let res = await fetch(`https://trawel-admin-api.onrender.com/posts/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ status: !status }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    let data1 = await res.json();
    console.log("data1: ", data1);

    // setTodo(data1)
    getData();
  };

  // TOGGLE DELETE
  const handleDelete = async (id) => {
    let res = await fetch(`https://trawel-admin-api.onrender.com/posts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    let data = await res.json();
    getData();
  };

  return (
    <div>
      <TableContainer m={10}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Location Name</Th>
              <Th>Price</Th>

              <Th>Status</Th>
              <Th>Action</Th>
              {/* <Th isNumeric>multiply by</Th> */}
            </Tr>
          </Thead>

          {todo.map((el) => (
            <Tbody>
              <Tr>
                <Td>{el.title}</Td>
                <Td>{el.price}</Td>
                <Td>
                  <Button
                    colorScheme="green"
                    onClick={() => handleToggle(el.id, el.status)}
                  >
                    {el.status ? "Booked" : "Open"}
                  </Button>
                </Td>
                <Td>
                  <Button colorScheme="red" onClick={() => handleDelete(el.id)}>
                    Delete
                  </Button>
                </Td>
                {/* <Td isNumeric>25.4</Td> */}
              </Tr>
            </Tbody>
          ))}
        </Table>
      </TableContainer>
    </div>
  );
}
