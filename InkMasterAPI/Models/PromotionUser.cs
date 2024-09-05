namespace InkMasterAPI.Models
{
    public class PromotionUser
    {
        public int PromotionUserId { get; set; }
        public int? PromotionId { get; set; }
        public int? UserId { get; set; }
        public bool? IsRedeemed { get; set; }
        public DateTime? RedeemedAt { get; set; }
    }
}
