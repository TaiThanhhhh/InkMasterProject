namespace InkMasterAPI.Models
{
    public class AppointmentDetail
    {
        public int AppointmentDetailId { get; set; }
        public int? AppointmentId { get; set; }
        public string? TattooDescription { get; set; }
        public string? TattooPlacement { get; set; }
        public int? EstimatedTimeHours { get; set; }
        public string? ImageUrl { get; set; }
    }
}
