namespace InkMasterAPI.Models
{
    public class LoyaltyProgram
    {
        public int LoyaltyProgramId { get; set; }
        public string? ProgramName { get; set; }
        public int? PointsRequired { get; set; }
        public string? Reward { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
    }
}
