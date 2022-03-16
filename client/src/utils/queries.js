import { gql } from '@apollo/client';

export const GET_ME = gql`
{
    me {
        _id
        email
        bookCount
        username
        savedBooks {
            title
            bookId
            authors
            description
            link
            image
        }
    }
}
`;