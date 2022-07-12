// implement your posts router here
const express = require('express');
const posts = require('./posts-model');

const router = express.Router()

// ENDPOINTS
// GET <--- Return array of all post objects in database
router.get('/', (req, res) => {
    posts.find().then(post => res.status(200).json(post))
}) /* */


/* 
| 1 | GET    | /api/posts              | Returns **an array of all the post objects** contained in the database                                                          |

| 2 | GET    | /api/posts/:id          | Returns **the post object with the specified id**                                                                               |

| 3 | POST   | /api/posts              | Creates a post using the information sent inside the request body and returns **the newly created post object**                 |

| 4 | PUT    | /api/posts/:id          | Updates the post with the specified id using data from the request body and **returns the modified document**, not the original |

| 5 | DELETE | /api/posts/:id          | Removes the post with the specified id and returns the **deleted post object**                                                  |

| 6 | GET    | /api/posts/:id/comments | Returns an **array of all the comment objects** associated with the post with the specified id    
*/

module.exports = router