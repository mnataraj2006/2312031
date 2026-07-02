import {
  Card,
  CardContent,
  Typography,
  Chip,
  Stack
} from "@mui/material";

export function NotificationCard({ notification }) {
  return (
    <Card variant="outlined">
      <CardContent>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mb={1}
        >
          <Typography variant="h6">
            {notification.Message}
          </Typography>
          <Stack direction="row" spacing={1}>
            <Chip
              label={notification.Type}
              color="primary"
              size="small"
            />
            {notification.read === false && (
              <Chip label="Unread" color="warning" size="small" />
            )}
          </Stack>
        </Stack>
        <Typography
          variant="caption"
          color="text.secondary"
        >
          {new Date(notification.Timestamp).toLocaleString()}
        </Typography>
      </CardContent>
    </Card>
  );
}