import React from 'react'

const PageFriends = () => {
  const friendList = [
    {
      id: '0',
      name: 'GiuppiTek',
      age: 20
    },
    {
      id: '1',
      name: 'Goku',
      age: 20
    },
    {
      id: '2',
      name: 'Vegeta',
      age: 20
    }
  ]

  return (
    <>
      <div>PageFriends</div>
      {friendList.map((friend) => (
        <div key={friend.id}>
          <div>{friend.name}</div>
          <div>{friend.age}</div>
        </div>
      ))}
    </>
  )
}

export default PageFriends
