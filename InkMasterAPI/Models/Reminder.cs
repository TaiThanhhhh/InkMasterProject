namespace InkMasterAPI.Models
{
    public class Reminder
    {
        public int ReminderId { get; set; }
        public int? UserId { get; set; }
        public int? AppointmentId { get; set; }
        public DateTime ReminderDate { get; set; }
        public bool? Sent { get; set; }
    }
}
