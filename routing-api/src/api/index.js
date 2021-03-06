export const getUsers = () => {
    return new Promise((resolve,reject) => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            if(response.status=== 200){
                response.json().then(data => {
                    resolve(data)
                }).catch(error => {
                    reject(error)
                })
            }else{
                reject(response.status)
            }
        }).catch(error => {
            reject(error);
        })
    })
}


export const getPosts = (id) => {
  return new Promise((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
      .then((response) => {
        if (response.status === 200) {
          response
            .json()
            .then((data) => {
              resolve(data);
            })
            .catch((error) => {
              reject(error);
            });
        } else {
          reject(response.status);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getTodos = (id) => {
  return new Promise((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
      .then((response) => {
        if (response.status === 200) {
          response
            .json()
            .then((data) => {
              resolve(data);
            })
            .catch((error) => {
              reject(error);
            });
        } else {
          reject(response.status);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getPhotos = (albumId) => {
  return new Promise((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
      .then((response) => {
        if (response.status === 200) {
          response
            .json()
            .then((data) => {
              resolve(data);
            })
            .catch((error) => {
              reject(error);
            });
        } else {
          reject(response.status);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getComments = (postId) => {
  return new Promise((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => {
        if (response.status === 200) {
          response
            .json()
            .then((data) => {
              resolve(data);
            })
            .catch((error) => {
              reject(error);
            });
        } else {
          reject(response.status);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getAlbums = (id) => {
  return new Promise((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/albums`)
      .then((response) => {
        if (response.status === 200) {
          response
            .json()
            .then((data) => {
              resolve(data);
            })
            .catch((error) => {
              reject(error);
            });
        } else {
          reject(response.status);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};
































