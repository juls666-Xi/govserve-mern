import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { notificationService, Notification } from '../lib/mockDatabase';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Bell, CheckCheck, Info, CheckCircle, AlertCircle, XCircle } from 'lucide-react';

export function NotificationsPage() {
  const { user } = useAuth();
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    loadNotifications();
  }, []);

  const loadNotifications = () => {
    if (!user) return;
    const notifs = notificationService.getNotifications(user.id);
    setNotifications(notifs);
  };

  const handleMarkAsRead = (id: string) => {
    notificationService.markAsRead(id);
    loadNotifications();
  };

  const handleMarkAllAsRead = () => {
    if (!user) return;
    notificationService.markAllAsRead(user.id);
    loadNotifications();
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'error':
        return <XCircle className="h-5 w-5 text-red-600" />;
      case 'warning':
        return <AlertCircle className="h-5 w-5 text-yellow-600" />;
      default:
        return <Info className="h-5 w-5 text-blue-600" />;
    }
  };

  const unreadNotifications = notifications.filter(n => !n.read);
  const readNotifications = notifications.filter(n => n.read);

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl">Notifications</h1>
          <p className="text-gray-600 mt-1">
            {unreadNotifications.length} unread notification{unreadNotifications.length !== 1 ? 's' : ''}
          </p>
        </div>
        {unreadNotifications.length > 0 && (
          <Button variant="outline" onClick={handleMarkAllAsRead}>
            <CheckCheck className="h-4 w-4 mr-2" />
            Mark all as read
          </Button>
        )}
      </div>

      {notifications.length === 0 ? (
        <Card>
          <CardContent className="py-12">
            <div className="text-center text-gray-500">
              <Bell className="h-16 w-16 mx-auto mb-4 opacity-50" />
              <p className="text-lg">No notifications yet</p>
              <p className="text-sm mt-1">You'll see notifications here when there are updates</p>
            </div>
          </CardContent>
        </Card>
      ) : (
        <>
          {/* Unread Notifications */}
          {unreadNotifications.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Unread ({unreadNotifications.length})</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {unreadNotifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="flex gap-4 p-4 bg-blue-50 border border-blue-200 rounded-lg"
                  >
                    <div className="flex-shrink-0">
                      {getNotificationIcon(notification.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1">
                          <p className="font-medium">{notification.title}</p>
                          <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                          <p className="text-xs text-gray-500 mt-2">
                            {new Date(notification.createdAt).toLocaleString()}
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleMarkAsRead(notification.id)}
                        >
                          Mark as read
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}

          {/* Read Notifications */}
          {readNotifications.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Read ({readNotifications.length})</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {readNotifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="flex gap-4 p-4 bg-gray-50 border rounded-lg opacity-75"
                  >
                    <div className="flex-shrink-0">
                      {getNotificationIcon(notification.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium">{notification.title}</p>
                      <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                      <p className="text-xs text-gray-500 mt-2">
                        {new Date(notification.createdAt).toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}
        </>
      )}
    </div>
  );
}
