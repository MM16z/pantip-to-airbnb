export async function getAllRooms() {
  const response = await fetch('https://pantip.com/api/forum-service/home/get_room_recommend', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization': 'Basic dGVzdGVyOnRlc3Rlcg==',
    },
  });
  const data = await response.json();
  return data;
}

export async function getTabsContent(topic: string) {
  const response = await fetch(`https://pantip.com/api/forum-service/forum/room_topic?room=${topic}&limit=50`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization': 'Basic dGVzdGVyOnRlc3Rlcg==',
    },
  });
  const data = await response.json();
  return data;
}

export async function searchTopic(payload: { keyword: string; page: number; rooms: string[]; timebias: boolean }) {
  const response = await fetch(`https://pantip.com/api/search-service/search/getresult`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization': 'Basic dGVzdGVyOnRlc3Rlcg==',
    },
    body: JSON.stringify(payload),
  });
  const data = await response.json();
  return data;
}
