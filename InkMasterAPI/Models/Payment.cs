namespace InkMasterAPI.Models
{
    public class Payment
    {
        public int PaymentId { get; set; }
        public int? AppointmentId { get; set; }
        public string? PaymentMethod { get; set; }
        public string? PaymentStatus { get; set; }
        public decimal? PaymentAmount { get; set; }
        public string? TransactionId { get; set; }
        public string? PaymentGateway { get; set; }
        public DateTime? PaymentDate { get; set; }
    }
}
