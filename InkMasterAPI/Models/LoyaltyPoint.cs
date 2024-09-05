namespace InkMasterAPI.Models
{
    public class LoyaltyPoint
    {
        public int LoyaltyPointId { get; set; }
        public int? UserId { get; set; }
        public int? Points { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
    }
}
