
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const data = [
      {
        id: '1',
        name: 'Alice',
        avatarUrl: 'https://randomuser.me/api/portraits/women/1.jpg',
        stories: [
          { id: '1', imageUrl: 'https://images.pexels.com/photos/18911192/pexels-photo-18911192/free-photo-of-the-bridge-is-over-water-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=800', seen: false },
          { id: '2', imageUrl: 'https://images.pexels.com/photos/16035630/pexels-photo-16035630/free-photo-of-photo-de-stetindem-avec-la-route-face-a-cette-montagne.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', seen: false },
          { id: '3', imageUrl: 'https://images.pexels.com/photos/25244852/pexels-photo-25244852/free-photo-of-kusadasi-from-a-drone-2.png?auto=compress&cs=tinysrgb&w=800', seen: false },
        ],
        seen:false
      },
      {
        id: '2',
        name: 'Bob',
        avatarUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
        stories: [
          { id: '4', imageUrl: 'https://images.pexels.com/photos/16110137/pexels-photo-16110137/free-photo-of-i-need-you-like-a-heart-needs-a-beat.jpeg?auto=compress&cs=tinysrgb&w=800', seen: false },
          { id: '5', imageUrl: 'https://images.pexels.com/photos/14883915/pexels-photo-14883915.jpeg?auto=compress&cs=tinysrgb&w=800', seen: false },
          { id: '6', imageUrl: 'https://images.pexels.com/photos/26936244/pexels-photo-26936244/free-photo-of-bikers.jpeg?auto=compress&cs=tinysrgb&w=800', seen: false },
        ],
        seen:false
      },
      {
        id: '3',
        name: 'Charlie',
        avatarUrl: 'https://randomuser.me/api/portraits/men/2.jpg',
        stories: [
          { id: '7', imageUrl: 'https://images.pexels.com/photos/18625307/pexels-photo-18625307/free-photo-of-kerala.jpeg?auto=compress&cs=tinysrgb&w=800', seen: false },
          { id: '8', imageUrl: 'https://images.pexels.com/photos/24710620/pexels-photo-24710620/free-photo-of-eagle.jpeg?auto=compress&cs=tinysrgb&w=800', seen: false },
          { id: '9', imageUrl: 'https://images.pexels.com/photos/16035312/pexels-photo-16035312/free-photo-of-italy.jpeg?auto=compress&cs=tinysrgb&w=800', seen: false },
        ],
        seen:false
      },
      {
        id: '4',
        name: 'Alice',
        avatarUrl: 'https://randomuser.me/api/portraits/women/1.jpg',
        stories: [
          { id: '1', imageUrl: 'https://images.pexels.com/photos/18911192/pexels-photo-18911192/free-photo-of-the-bridge-is-over-water-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=800', seen: false },
          { id: '2', imageUrl: 'https://images.pexels.com/photos/16035630/pexels-photo-16035630/free-photo-of-photo-de-stetindem-avec-la-route-face-a-cette-montagne.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', seen: false },
          { id: '3', imageUrl: 'https://images.pexels.com/photos/25244852/pexels-photo-25244852/free-photo-of-kusadasi-from-a-drone-2.png?auto=compress&cs=tinysrgb&w=800', seen: false },
        ],
        seen:false
      },
      {
        id: '5',
        name: 'Bob',
        avatarUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
        stories: [
          { id: '4', imageUrl: 'https://images.pexels.com/photos/16110137/pexels-photo-16110137/free-photo-of-i-need-you-like-a-heart-needs-a-beat.jpeg?auto=compress&cs=tinysrgb&w=800', seen: false },
          { id: '5', imageUrl: 'https://images.pexels.com/photos/14883915/pexels-photo-14883915.jpeg?auto=compress&cs=tinysrgb&w=800', seen: false },
          { id: '6', imageUrl: 'https://images.pexels.com/photos/26936244/pexels-photo-26936244/free-photo-of-bikers.jpeg?auto=compress&cs=tinysrgb&w=800', seen: false },
        ],
        seen:false
      },
      {
        id: '6',
        name: 'Charlie',
        avatarUrl: 'https://randomuser.me/api/portraits/men/2.jpg',
        stories: [
          { id: '7', imageUrl: 'https://images.pexels.com/photos/18625307/pexels-photo-18625307/free-photo-of-kerala.jpeg?auto=compress&cs=tinysrgb&w=800', seen: false },
          { id: '8', imageUrl: 'https://images.pexels.com/photos/24710620/pexels-photo-24710620/free-photo-of-eagle.jpeg?auto=compress&cs=tinysrgb&w=800', seen: false },
          { id: '9', imageUrl: 'https://images.pexels.com/photos/16035312/pexels-photo-16035312/free-photo-of-italy.jpeg?auto=compress&cs=tinysrgb&w=800', seen: false },
        ],
        seen:false
      },
      {
        id: '7',
        name: 'Alice',
        avatarUrl: 'https://randomuser.me/api/portraits/women/1.jpg',
        stories: [
          { id: '1', imageUrl: 'https://images.pexels.com/photos/18911192/pexels-photo-18911192/free-photo-of-the-bridge-is-over-water-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=800', seen: false },
          { id: '2', imageUrl: 'https://images.pexels.com/photos/16035630/pexels-photo-16035630/free-photo-of-photo-de-stetindem-avec-la-route-face-a-cette-montagne.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', seen: false },
          { id: '3', imageUrl: 'https://images.pexels.com/photos/25244852/pexels-photo-25244852/free-photo-of-kusadasi-from-a-drone-2.png?auto=compress&cs=tinysrgb&w=800', seen: false },
        ],
        seen:false
      },
      {
        id: '8',
        name: 'Bob',
        avatarUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
        stories: [
          { id: '4', imageUrl: 'https://images.pexels.com/photos/16110137/pexels-photo-16110137/free-photo-of-i-need-you-like-a-heart-needs-a-beat.jpeg?auto=compress&cs=tinysrgb&w=800', seen: false },
          { id: '5', imageUrl: 'https://images.pexels.com/photos/14883915/pexels-photo-14883915.jpeg?auto=compress&cs=tinysrgb&w=800', seen: false },
          { id: '6', imageUrl: 'https://images.pexels.com/photos/26936244/pexels-photo-26936244/free-photo-of-bikers.jpeg?auto=compress&cs=tinysrgb&w=800', seen: false },
        ],
        seen:false
      },
      {
        id: '9',
        name: 'Charlie',
        avatarUrl: 'https://randomuser.me/api/portraits/men/2.jpg',
        stories: [
          { id: '7', imageUrl: 'https://images.pexels.com/photos/18625307/pexels-photo-18625307/free-photo-of-kerala.jpeg?auto=compress&cs=tinysrgb&w=800', seen: false },
          { id: '8', imageUrl: 'https://images.pexels.com/photos/24710620/pexels-photo-24710620/free-photo-of-eagle.jpeg?auto=compress&cs=tinysrgb&w=800', seen: false },
          { id: '9', imageUrl: 'https://images.pexels.com/photos/16035312/pexels-photo-16035312/free-photo-of-italy.jpeg?auto=compress&cs=tinysrgb&w=800', seen: false },
        ],
        seen:false
      },
    
    ];

    return NextResponse.json(data);
  } catch (error) {
    console.error('Failed to fetch stories:', error);
    return NextResponse.json({ error: 'Failed to fetch stories' }, { status: 500 });
  }
}
