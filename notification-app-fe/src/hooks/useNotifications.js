import {useEffect, useState} from "react";
import {fetchNotifications} from "../api/notifications";
export function useNotifications(page, filter) {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    async function loadNotifications() {
      setLoading(true);
      try {
        const notificationType = filter === "All" ? "" : filter;
        const data = await fetchNotifications(page, 10, notificationType);
        setNotifications(data.notifications || []);
        setTotal(data.total || 0);
        setTotalPages(data.totalPages || 1);
        setError("");
      } catch (err) {
        const msg = err?.message || err?.error || (typeof err === "string" ? err : "Unable to fetch notifications");
        setError(msg);
      } finally {
        setLoading(false);
      }
    }
    loadNotifications();
  }, [page, filter]);
  return {notifications, loading, error, total, totalPages};
}