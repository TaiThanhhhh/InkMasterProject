namespace InkMasterAPI.Models
{
    public class Schedule
    {
        public int ScheduleId { get; set; }
        public int? TattooArtistId { get; set; }
        public DateTime AvailableFrom { get; set; }
        public DateTime AvailableTo { get; set; }
        public string? Status { get; set; }
    }
}
