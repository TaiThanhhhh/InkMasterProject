namespace InkMasterAPI.Models
{
    public class Survey
    {
        public int SurveyId { get; set; }
        public int? UserId { get; set; }
        public string? Feedback { get; set; }
        public DateTime? SubmittedAt { get; set; }
    }
}
