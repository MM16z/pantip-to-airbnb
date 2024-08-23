import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import Image from 'next/image';

import NoImagePng from '@/assets/images/no-image.png';
import { formatTimeDifference } from '@/utils/formatTimeDifference';

type pagePropType = {
  contentImageUrl: string;
  contentTitle: string;
  author: string;
  tags: {
    name: string;
  }[];
  commentCount: number;
  createdTime: string;
};

export default function CardComponent({ contentImageUrl, contentTitle, author, tags, commentCount, createdTime }: pagePropType) {
  function parseStringToReact(input: any) {
    const parts = input?.split(/(\{\{em\}\}|\{\{eem\}\})/);
    let isEmphasized = false;

    return parts?.map((part: any, index: any) => {
      if (part === '{{em}}') {
        isEmphasized = true;
        return null;
      } else if (part === '{{eem}}') {
        isEmphasized = false;
        return null;
      } else if (isEmphasized) {
        return <em key={index}>{part}</em>;
      } else {
        return <span key={index}>{part}</span>;
      }
    });
  }

  return (
    <Card sx={{ maxWidth: 345, border: 'inherit', boxShadow: 'inherit', alignSelf: 'flex-start' }}>
      <CardActionArea className="flex flex-col items-center">
        <Image
          height={250}
          style={{ objectFit: 'cover', maxHeight: '250px', minHeight: '250px', borderRadius: '12px' }}
          alt="green iguana"
          src={!contentImageUrl ? NoImagePng : contentImageUrl}
          width={263}

        />
        <CardContent
          sx={{
            padding: '12px 12px 12px 0px',
            alignSelf: 'flex-start',
          }}
        >
          <Typography gutterBottom component="div" className="mb-2 text-sm font-bold">
            {parseStringToReact(contentTitle)}
          </Typography>
          <Typography variant="body2" color="text.secondary" className="mb-2 flex flex-wrap gap-y-2">
            {tags?.map((tag, index) => (
              <span
                className="mr-2 rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-800"
                key={index}
              >
                <span className="mb-1">{tag.name}</span>
              </span>
            ))}
          </Typography>
          <Typography variant="body2" color="text.secondary" className="mb-2">
            {author}
          </Typography>
          <Typography variant="body2" color="text.secondary" className="grid grid-cols-2">
            <span>
              {commentCount}
              {' '}
              comments
            </span>
            <span className="justify-self-end">{formatTimeDifference(createdTime)}</span>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
